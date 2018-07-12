import React from "react";
import {
  FaUser,
  FaEdit,
  FaHome,
  FaDropbox
} from 'react-icons/lib/fa/';

export const getCookie = (name)=> {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};
export  const setCookie = (name, value, options)=> {
    console.log(value);
    options = options || {};

   let expires = options.expires;

    if (typeof expires === "number" && expires) {
        let d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let updatedCookie = name + "=" + value;

    for (let propName in options) {
        updatedCookie += "; " + propName;
        let propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
};
export  const deleteCookie = (name) => {
    setCookie(name, "", {
        expires: -1
    })
};

export const getAuthors = (authors) => {
  return authors ? authors.map((author)=>author.author.lastName+" "+
    (author.author.firstName!==undefined && author.author.firstName!== null?(author.author.firstName.substring(0,1)+"."):"") +
    (author.author.middleName!==undefined && author.author.middleName!==null?(author.author.middleName.substring(0,1)+"."):"")) : []
};

export const getAddress = (address) => {
  let result ="";
  for (let key in address) {
    if (address[key] && address[key].trim() !== "") {
      result += address[key].trim() + ",";
    }
  }
  result = result.substring(0,result.lastIndexOf(","));
  return result;
};

export const formatDate = (date) => {
  if (date != null) {

    date = new Date(date);

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear();

    var hh = date.getHours();
    if (hh < 10) hh = '0' + hh;

    var minut = date.getMinutes();
    if (minut < 10) minut = '0' + minut;

    var ss = date.getSeconds();
    if (ss < 10) ss = '0' + ss;

    return dd + '.' + mm + '.' + yy + " " + hh + ":" + minut + ":" + ss;

  } else {
    return "";
  }


};

export const getMenuItemIcon = (menuItem) => {
  return menuItem.url === "/profile" ? <FaUser style={{verticalAlign: "text-top"}}/> :
    menuItem.url === "/home" ? <FaHome style={{verticalAlign: "text-top"}}/> :
      menuItem.url === "/admin" ? <FaEdit style={{verticalAlign: "text-top"}}/> :
        menuItem.url === "/seller" ? <FaDropbox style={{verticalAlign: "text-top"}}/> : null;
}
