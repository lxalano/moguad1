!function(t){function e(t){var e=t.href,i=t.className&&-1!==t.className.indexOf("step__next")
o&&e&&-1!==e.indexOf("/tds")&&!i&&(n=!0,t.setAttribute("target","_blank"),t.setAttribute("onclick","url='"+o+"'; setTimeout('location.href=url',"+r+");this.href='"+e+"';"))}var n=!1,r=1000,i=function(t){var e={},n=t.split("?")[1]
if(!n)return e
for(var r=n.split("&"),i=0;i<r.length;i++){var a=r[i].split("=")
e[a[0]]=a[1]||""}return e}(window.location.href),a=i._soUrl
if(a){var o=decodeURIComponent(a)
if(!0!==n&&o)for(var f=t.getElementsByTagName("a"),l=0;l<f.length;l++){var s=f[l]
!function(){e(s)}()}}}(document)
