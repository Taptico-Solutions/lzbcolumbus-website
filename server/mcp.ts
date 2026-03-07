/**
 * MCP (Model Context Protocol) Server for La-Z-Boy Columbus
 *
 * This module exposes store data as MCP resources and tools so that
 * AI assistants (Claude Desktop, ChatGPT plugins, etc.) can query
 * live, authoritative information about the store.
 *
 * Endpoint: GET/POST /api/mcp
 * Transport: HTTP with Server-Sent Events (SSE) via StreamableHTTP
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { z } from "zod";
import type { Request, Response, NextFunction } from "express";

// ─── Static store data ────────────────────────────────────────────────────────

const STORE_INFO = {
  name: "La-Z-Boy of Columbus",
  tagline: "Locally Owned & Operated Furniture Store",
  description:
    "La-Z-Boy of Columbus is a locally owned and operated furniture store serving Columbus, Phenix City, Fortson, Midland, and the entire Chattahoochee Valley since 2002. Owned and operated by the Evans family, we offer premium La-Z-Boy furniture, free in-store design services, and local delivery.",
  address: {
    street: "5555 Whittlesey Blvd, Bldg 1",
    city: "Columbus",
    state: "GA",
    zip: "31909",
    full: "5555 Whittlesey Blvd, Bldg 1, Columbus, GA 31909",
  },
  phone: "(706) 653-1070",
  email: "sevans@lazboy-columbus.com",
  website: "https://www.lzbcolumbus.com",
  hours: {
    "Monday–Saturday": "10:00 AM – 7:00 PM",
    Sunday: "12:30 PM – 5:00 PM",
  },
  serviceAreas: [
    "Columbus, GA",
    "Phenix City, AL",
    "Fortson, GA",
    "Midland, GA",
    "Auburn, AL",
    "Opelika, AL",
    "Harris County, GA",
    "Chattahoochee Valley",
  ],
  socialMedia: {
    facebook: "https://www.facebook.com/lazboycolumbus/",
    instagram: "https://www.instagram.com/lazboycolumbus/",
  },
  googleMaps: "https://maps.app.goo.gl/your-link",
  established: 2002,
  owners: "The Evans Family",
};

const SPECIAL_OFFERS = [
  {
    id: "comfort-club",
    title: "Comfort Club Membership",
    description:
      "Join our exclusive Comfort Club for members-only discounts, early access to sales, and special promotions available only at our Columbus, Georgia location.",
    ctaUrl: "/comfort-club",
  },
  {
    id: "design-services",
    title: "Free In-Store Design Services",
    description:
      "Work one-on-one with our design consultants to find the perfect furniture for your home. No charge, no obligation.",
    ctaUrl: "/",
  },
  {
    id: "local-delivery",
    title: "Local Delivery Team",
    description:
      "Our own local delivery team handles every delivery with care. We serve Columbus, Phenix City, and the surrounding Chattahoochee Valley.",
    ctaUrl: "/",
  },
];

const BLOG_POSTS = [
  {
    id: "clingstones-partnership",
    title:
      "Clingstones and La-Z-Boy of Columbus Combine to Offer Local Youths Their Own 'Field of Dreams'",
    excerpt:
      "We're proud to announce a new partnership that invites local youth league teams to join their heroes on the diamond.",
    date: "2026-02-18",
    url: "/blog/clingstones-partnership",
  },
  {
    id: "best-recliner-columbus-ga",
    title: "Best Recliners for Columbus, GA Homes",
    excerpt:
      "Discover the top La-Z-Boy recliner models that Columbus, Georgia homeowners love most.",
    date: "2026-01-15",
    url: "/blog/best-recliner-columbus-ga",
  },
  {
    id: "interior-design-chattahoochee-valley",
    title: "Interior Design Tips for Chattahoochee Valley Homes",
    excerpt:
      "Our in-store design consultants share their top tips for decorating homes in the Columbus and Phenix City area.",
    date: "2025-12-10",
    url: "/blog/interior-design-chattahoochee-valley",
  },
];

// ─── MCP Server setup ─────────────────────────────────────────────────────────

function createMcpServer(): McpServer {
  const server = new McpServer({
    name: "lazboy-columbus",
    version: "1.0.0",
  });

  // ── Resources ──────────────────────────────────────────────────────────────

  server.resource("store-info", "lazboy://store/info", async () => ({
    contents: [
      {
        uri: "lazboy://store/info",
        mimeType: "application/json",
        text: JSON.stringify(STORE_INFO, null, 2),
      },
    ],
  }));

  server.resource("special-offers", "lazboy://store/special-offers", async () => ({
    contents: [
      {
        uri: "lazboy://store/special-offers",
        mimeType: "application/json",
        text: JSON.stringify(SPECIAL_OFFERS, null, 2),
      },
    ],
  }));

  server.resource("blog-posts", "lazboy://store/blog-posts", async () => ({
    contents: [
      {
        uri: "lazboy://store/blog-posts",
        mimeType: "application/json",
        text: JSON.stringify(BLOG_POSTS, null, 2),
      },
    ],
  }));

  // ── Tools ──────────────────────────────────────────────────────────────────

  server.tool(
    "get_store_info",
    "Get complete information about La-Z-Boy of Columbus including address, hours, phone, and service areas.",
    {},
    async () => ({
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(STORE_INFO, null, 2),
        },
      ],
    })
  );

  server.tool(
    "get_hours",
    "Get the current business hours for La-Z-Boy of Columbus.",
    {},
    async () => ({
      content: [
        {
          type: "text" as const,
          text: `La-Z-Boy of Columbus Business Hours:\n${Object.entries(STORE_INFO.hours)
            .map(([day, hours]) => `  ${day}: ${hours}`)
            .join("\n")}`,
        },
      ],
    })
  );

  server.tool(
    "get_contact",
    "Get the contact details (phone, email, address) for La-Z-Boy of Columbus.",
    {},
    async () => ({
      content: [
        {
          type: "text" as const,
          text: `La-Z-Boy of Columbus\nAddress: ${STORE_INFO.address.full}\nPhone: ${STORE_INFO.phone}\nEmail: ${STORE_INFO.email}\nWebsite: ${STORE_INFO.website}`,
        },
      ],
    })
  );

  server.tool(
    "get_special_offers",
    "Get the current special offers and promotions available at La-Z-Boy of Columbus.",
    {},
    async () => ({
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(SPECIAL_OFFERS, null, 2),
        },
      ],
    })
  );

  server.tool(
    "search_blog",
    "Search blog posts from La-Z-Boy of Columbus by keyword.",
    { keyword: z.string().describe("Keyword to search for in blog post titles and excerpts") },
    async ({ keyword }) => {
      const results = BLOG_POSTS.filter(
        (post) =>
          post.title.toLowerCase().includes(keyword.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(keyword.toLowerCase())
      );
      return {
        content: [
          {
            type: "text" as const,
            text:
              results.length > 0
                ? JSON.stringify(results, null, 2)
                : `No blog posts found matching "${keyword}".`,
          },
        ],
      };
    }
  );

  server.tool(
    "check_service_area",
    "Check if a specific city or area is served by La-Z-Boy of Columbus.",
    { location: z.string().describe("City or area name to check") },
    async ({ location }) => {
      const served = STORE_INFO.serviceAreas.some((area) =>
        area.toLowerCase().includes(location.toLowerCase())
      );
      return {
        content: [
          {
            type: "text" as const,
            text: served
              ? `Yes! La-Z-Boy of Columbus serves ${location}. We deliver to Columbus, Phenix City, Fortson, Midland, Auburn, Opelika, and the entire Chattahoochee Valley.`
              : `${location} may be outside our standard delivery area. Please call us at ${STORE_INFO.phone} to confirm. We serve Columbus, Phenix City, Fortson, Midland, Auburn, Opelika, and the Chattahoochee Valley.`,
          },
        ],
      };
    }
  );

  return server;
}

// ─── Express middleware ────────────────────────────────────────────────────────

// Keep one transport per session (keyed by session ID from the Mcp-Session-Id header)
const transports = new Map<string, StreamableHTTPServerTransport>();

export function registerMcpRoutes(app: import("express").Express) {
  app.all("/api/mcp", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const sessionId = req.headers["mcp-session-id"] as string | undefined;

      let transport: StreamableHTTPServerTransport;

      if (sessionId && transports.has(sessionId)) {
        // Reuse existing session
        transport = transports.get(sessionId)!;
      } else if (req.method === "POST" && !sessionId) {
        // New session initialisation
        transport = new StreamableHTTPServerTransport({
          sessionIdGenerator: () => `lzb-${Date.now()}-${Math.random().toString(36).slice(2)}`,
          onsessioninitialized: (id) => {
            transports.set(id, transport);
          },
        });

        transport.onclose = () => {
          if (transport.sessionId) {
            transports.delete(transport.sessionId);
          }
        };

        const mcpServer = createMcpServer();
        await mcpServer.connect(transport);
      } else {
        res.status(400).json({ error: "Invalid or missing session" });
        return;
      }

      await transport.handleRequest(req, res, req.body);
    } catch (err) {
      next(err);
    }
  });

  // Expose a simple discovery endpoint so AI tools can find the MCP server
  app.get("/api/mcp/info", (_req: Request, res: Response) => {
    res.json({
      name: "La-Z-Boy Columbus MCP Server",
      version: "1.0.0",
      description:
        "MCP server exposing store information, special offers, and blog content for La-Z-Boy of Columbus.",
      endpoint: "/api/mcp",
      transport: "StreamableHTTP",
      resources: [
        { uri: "lazboy://store/info", description: "Complete store information" },
        { uri: "lazboy://store/special-offers", description: "Current special offers" },
        { uri: "lazboy://store/blog-posts", description: "Blog posts" },
      ],
      tools: [
        "get_store_info",
        "get_hours",
        "get_contact",
        "get_special_offers",
        "search_blog",
        "check_service_area",
      ],
    });
  });
}
