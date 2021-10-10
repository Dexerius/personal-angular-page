export const facebook = 'https://www.facebook.com/jergus.kacmar/';
export const instagram = 'https://www.instagram.com/xdexerio/';
export const github = 'https://github.com/Dexerius/';

const redirect = (path: string): void => {
  window.open(path, '_blank');
};

export const onFacebook = () => redirect(facebook);

export const onInstagram = () => redirect(instagram);

export const onGithub = () => redirect(github);
