/*
 Write a JavaScript function replaceATag(str) that replaces in a HTML document given as string all the tags
 <a href="…">…</a> with corresponding tags [URL=…]…/URL]. Write JS program aTagReplacer.js that invokes your function
 with the sample input data below and prints the output at the console. Examples:

 Input	                                            Output
 '<ul>                                              <ul>
    <li>                                                <li>
        <a href=http://softuni.bg>SoftUni</a>               [URL href=http://softuni.bg]SoftUni[/URL]
    </li>                                               </li>
 </ul>'	                                            </ul>
 */

var input = '<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>';

function replaceATag(str) {
    str = str.replace(/<a/g, "[URL");
    str = str.replace(/<\/a>/g, "[/URL]");
    str = str.substr(0, 35) + "]" + str.substr(36);
    return str;
}

if (!String.prototype.htmlEscape) {
    String.prototype.htmlEscape = function () {
        return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39').replace(/ /g, '&nbsp;');
    }
}

document.getElementById("showResult").innerHTML = replaceATag(input).htmlEscape();