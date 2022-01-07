const getUrlParameter = (parameter, url = window.location.href) => {
  const splitIndex = url.indexOf('?');
  const str = url.substring(splitIndex + 1);
  const reg = new RegExp(`(^|&)${parameter}=([^&]*)(&|$)`, 'i');
  const result = str.match(reg);
  if (result != null) {
    return decodeURI(decodeURIComponent(result[2]));
  }
  return null;
};

export default getUrlParameter;
