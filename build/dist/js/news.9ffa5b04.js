webpackJsonp([10],{0:function(e,t){e.exports={proxy:"https://www.eunieunieuni.xin/",url:"/news"}},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(41),c=(n.n(i),n(0)),l=n.n(c);const r=["新闻公示","精彩回顾","活动预告","成电辩坛","成电舞台","成电故事","成电影院","成电栋梁","成电讲坛","成电百家","其他新闻"];$(document).ready(function(){$("#newsType").text(r[1]),$.ajax({url:l.a.url+"/getNotice",type:"GET"}).done(function(e){console.log("success");for(var t=e[1],n=!1,i=0,c=0;c<t.length;c++)if(null!==t[c].cover){if(i>=4)continue;(l=$(".newsContent").eq(i)).children(".title").text(t[c].title),l.children(".time").text(t[c].publicAt),l.children(".content").text(t[c].summary),l.children(".newsPic").attr("src",t[c].cover),i++}else{if(i>=4){if(!0===n)break}else if(!0===n)continue;var l;(l=$(".newsContent").eq(5)).children(".title").text(t[c].title),l.children(".time").text(t[c].publicAt),l.children(".content").text(t[c].summary),n=!0}var r=Math.ceil(t.length/5);$(".totalPages").text("总页数：\t"+r)})}),$(".btn").click(function(){var e=$("#pageInput").val();""!==e&&$.ajax({url:l.a.url+"/getNotice",type:"GET"}).done(function(t){console.log("success");var n=t[1];if(!(e>n.length/5)){for(var i=!1,c=0,l=5*e;l<n.length;l++)if(null!==n[l].cover){if(c>=4)continue;(r=$(".newsContent").eq(c)).children(".title").text(n[l].title),r.children(".time").text(n[l].publicAt),r.children(".content").text(n[l].summary),r.children(".newsPic").attr("src",n[l].cover),c++}else{if(c>=4){if(!0===i)break}else if(!0===i)continue;var r;(r=$(".newsContent").eq(5)).children(".title").text(n[l].title),r.children(".time").text(n[l].publicAt),r.children(".content").text(n[l].summary),i=!0}$("#pageNumber").text(e.toString())}})}),$(".MovePage1").click(function(){var e=$("#pageNumber").val();e<=1||$.ajax({url:l.a.url+"/getNotice",type:"GET"}).done(function(t){console.log("success");for(var n=t[1],i=!1,c=0,l=5*(e-1);l<n.length;l++)if(null!==n[l].cover){if(c>=4)continue;(r=$(".newsContent").eq(c)).children(".title").text(n[l].title),r.children(".time").text(n[l].publicAt),r.children(".content").text(n[l].summary),r.children(".newsPic").attr("src",n[l].cover),c++}else{if(c>=4){if(!0===i)break}else if(!0===i)continue;var r;(r=$(".newsContent").eq(5)).children(".title").text(n[l].title),r.children(".time").text(n[l].publicAt),r.children(".content").text(n[l].summary),i=!0}})}),$(".MovePage2").click(function(){var e=$("#pageNumber").val();$.ajax({url:l.a.url+"/getNotice",type:"GET"}).done(function(t){console.log("success");var n=t[1];if(!(e>=n.length/5))for(var i=!1,c=0,l=5*(e+1);l<n.length;l++)if(null!==n[l].cover){if(c>=4)continue;(r=$(".newsContent").eq(c)).children(".title").text(n[l].title),r.children(".time").text(n[l].publicAt),r.children(".content").text(n[l].summary),r.children(".newsPic").attr("src",n[l].cover),c++}else{if(c>=4){if(!0===i)break}else if(!0===i)continue;var r;(r=$(".newsContent").eq(5)).children(".title").text(n[l].title),r.children(".time").text(n[l].publicAt),r.children(".content").text(n[l].summary),i=!0}})})},41:function(e,t){}},[40]);