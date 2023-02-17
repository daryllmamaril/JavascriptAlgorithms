// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

function domainName(url) {
  url = url.replace("http://", "");
  url = url.replace("https://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
};

const domainName2 = (url) => {
  const dotComIndx = url.search(".com");
  const deleteDotCom = url.substring(0, dotComIndx);
  url = deleteDotCom;

  const httpIndx = url.lastIndexOf("/");
  const deleteHttp = url.slice(httpIndx + 1)
  url = deleteHttp;

  const wwwIndx = url.indexOf(".")
  return deleteHttp.slice(wwwIndx + 1)

};
console.log(domainName("http://github.com/carbonfive/raygun")); //github
console.log(domainName("http://www.zombie-bites.com")); //zombie-bites
console.log(domainName("https://www.cnet.com")); //cnet
