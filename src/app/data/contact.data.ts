export interface SocialLinks {
  githubPersonal: string;
  githubPro: string;
  linkedin: string;
}

export interface ContactInfo extends SocialLinks {
  email: string;
  phone: string;
  locationKey: string;
  website: string;
}

export const SOCIAL_LINKS: SocialLinks = {
  githubPersonal: 'https://github.com/JeremyVandeputte',
  githubPro: 'https://github.com/jervandeputt',
  linkedin: 'https://www.linkedin.com/in/j%C3%A9r%C3%A9myvandeputte-724502204/',
};

export const CONTACT: ContactInfo = {
  ...SOCIAL_LINKS,
  email: 'vandeputtejeremy@gmail.com',
  phone: '0474/664103',
  locationKey: 'contact.location',
  website: 'www.jeremyvandeputte.be',
};
