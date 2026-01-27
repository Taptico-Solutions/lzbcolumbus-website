import jsonp from 'jsonp';

interface MailchimpResponse {
  result: 'success' | 'error';
  msg: string;
}

interface MailchimpFormData {
  EMAIL: string;
  FNAME?: string;
  LNAME?: string;
  MMERGE7?: string; // City
  MMERGE9?: string; // Zip Code
  MMERGE24?: string; // Who helped you
  [key: string]: string | undefined;
}

export const subscribeToMailchimp = (formData: MailchimpFormData): Promise<MailchimpResponse> => {
  const url = 'https://lazyboy.us2.list-manage.com/subscribe/post-json?u=125356b6e77a67ca13f0f1c06&id=677285eb78&f_id=00b33ce0f0';
  
  // Convert form data to query string parameters
  const params = new URLSearchParams();
  Object.keys(formData).forEach(key => {
    if (formData[key]) {
      params.append(key, formData[key] as string);
    }
  });

  // Mailchimp expects the hidden bot field to be present if it's in the form, 
  // but for programmatic submission we usually skip it unless we want to simulate it.
  // We'll append the params to the URL.
  
  const subscribeUrl = `${url}&${params.toString()}`;

  return new Promise((resolve, reject) => {
    jsonp(subscribeUrl, { param: 'c' }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data as MailchimpResponse);
      }
    });
  });
};
