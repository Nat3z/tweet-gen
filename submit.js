console.log(` ███╗░░██╗░░░░░██╗░██████╗\n ████╗░██║░░░░░██║██╔════╝\n ██╔██╗██║░░░░░██║╚█████╗░\n ██║╚████║██╗░░██║░╚═══██╗\n ██║░╚███║╚█████╔╝██████╔╝\n ╚═╝░░╚══╝░╚════╝░╚═════╝░\n `); console.error(`The Console is VERY sensitive to any changes. \nIf this website is web-based/login-based, please do not share these logs to anyone.`); /** * The Main Function for NJS * @param Brackets Add '[]' around text to label it as an id * @param Astreiks Use '*' to label the entire body * @param Tags Use HTML Tags ex. h1, h2, h3, b, for all tags in the Body */ function n(obj) { if (obj == "*") { return new body(); } if (contains(obj, "[") && contains(obj, "]")) { let o = obj; o = o.replace("[", ""); o = o.replace("]", ""); return new idbased(o); } return new tagbased(obj); } function contains(ob, string) { if (ob.indexOf(string) >= 0) { return true; } return false; } class tagbased { constructor(object) { this.obj = object; } /** * Deletes The Given Object : Tags, IDs */ del() { var element = document.getElementsByTagName(this.obj), index; for (index = element.length - 1; index >= 0; index--) { element[index].parentNode.removeChild(element[index]); } } hide() { var element = document.getElementsByTagName(this.obj), index; for (index = element.length - 1; index >= 0; index--) { element[index].parentNode.style.visibility = "hidden"; element[index].parentNode.removeChild(element[index]); } } } class idbased { constructor(object) { this.obj = object; /** * Returns The Value of Text if the ID Provided is an input : IDs */ this.val = document.getElementById(this.obj).value; } /** * Deletes The Given Object : Tags, IDs */ del() { document.getElementById(this.obj).remove(); } /** * Adds content to the Body : Body * @param HTML */ add(HTML) { document.getElementById(this.obj).innerHTML += HTML; } /** * Resets The Value of Object (Only For Inputs) : IDs */ clear() { document.getElementById(this.obj).value = null; } /** * Sets the text of the given ID : IDs * @param text */ setText(text) { document.getElementById(this.obj).textContent = text; } /** * Sets the HTML of the given ID : IDs * @param HTML */ setHTML(text) { document.getElementById(this.obj).innerHTML = text; } /** * Hides the Current Object */ hide() { document.getElementById(this.obj).style.visibility = "hidden"; } /** * Shows the Current Object */ show() { document.getElementById(this.obj).style.visibility = "visible"; } } class body { /** * Adds content to the Body : Body * @param HTML */ add(contents) { document.body.innerHTML += contents; } /** * Create a Static-based PHP (Recommended only for Github Pages) * Credits: * https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript/901144#901144 */ getUrlValues(name, url = window.location.href) { name = name.replace(/[\[\]]/g, '\\$&'); var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url); if (!results) return null; if (!results[2]) return ''; return decodeURIComponent(results[2].replace(/\+/g, ' ')); } /** * Simple Random Number Generator For Your Website * @param upto */ random(upto) { return Math.floor(Math.random() * upto); } }

function img() {
    document.getElementById("img").style.display = "block";
    document.getElementById("overlay").style.display = "none";
}

function imgconfirm() {
    document.getElementById("img").style.display = "none";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("noimgatt").textContent = "Image has been Attached"
}

function askforadmin() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("owolay").style.display = "block";
}

function tweet() {
    if (n("[txt]").val == "" || n("[like]").val == "" || n("[ret]").val == "" || n("[quote]").val == "" || n("[pfp]").val == "" || 
        n("[time]").val == "" || n("[date]").val == "" ) {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("owolay").style.display = "none";
        alert("This Tweet Does Not Contain The Required Data");
    } else {
        var newUrl = "./post.html?";

        newUrl += "txt=" + document.getElementById("txt").value;
        newUrl += "&pfp=" + document.getElementById("pfp").value;
        newUrl += "&tag=" + document.getElementById("myat").value;
        newUrl += "&name=" + document.getElementById("disname").value;
        
        newUrl += "&like=" + document.getElementById("like").value;
        newUrl += "&rt=" + document.getElementById("ret").value;
        newUrl += "&qu=" + document.getElementById("quote").value;
        newUrl += "&time=" + document.getElementById("time").value;
        newUrl += "&date=" + document.getElementById("date").value;

        if (document.getElementById("hash").value != "") {
            newUrl += "&hash=" + document.getElementById("hash").value;
        }

        if (document.getElementById("ats").value != "") {
            newUrl += "&ats=" + document.getElementById("ats").value;
        }

        if (document.getElementById("imgurl").value != "") {
            newUrl += "&att=" + document.getElementById("imgurl").value;
        }

        window.location.replace(newUrl);
    }


}