{"changed":true,"filter":false,"title":"script.js","tooltip":"/1-vandalen/strings/script.js","value":"\"use strict\";\n\nwindow.onload = function(){\n\n\t// I denna funktion ska du skriva koden för att hantera \"spelet\"\n\tvar convertString = function(str)\n\t{\n\t\t\n\t\tvar stringConverter = '';\n\t\t\n\n\t\tfor (var i = 0; i < str.length; i++) \n\t\t{\n\t\t\tvar stringCharacter = str.charAt(i);\n\t\t\t\n\t\t\tif (stringCharacter ==='A' || stringCharacter ==='a')\n\t\t\t\t{\n\t\t\t\t\tstringCharacter = '#';\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\n\t\t\tif (stringCharacter == stringCharacter.toUpperCase()) \n\t\t\t\t{\n\t\t\t\t\tstringCharacter = stringCharacter.toLowerCase();\n\t\t\t\t}\n\t\t\t\n\t\t\t\n\t\t\tif (stringCharacter == stringCharacter.toLowerCase())\n\t\t\t\t{\n\t\t\t\t\tstringCharacter = stringCharacter.toUpperCase();\n\t\t\t\t}\n\t\t\t\t\n\t\t\tstringConverter += stringCharacter;\n\t\t\t}\n\t\t\t\treturn stringConverter;\n\t\t\t}\n\t\t\t\n\t\t};\n\n\n\t// ------------------------------------------------------------------------------\n\n\n\t// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra\n\tvar p = document.querySelector(\"#value\"); // Referens till DOM-noden med id=\"#value\"\n\tvar input = document.querySelector(\"#string\");\n\tvar submit = document.querySelector(\"#send\");\n\n\t// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.\n\tsubmit.addEventListener(\"click\", function(e){\n\t\te.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.\n\n\t\tp.classList.remove( \"error\");\n\n\t\ttry {\n\t\t\tvar answer = convertString (input.value); // Läser in texten från textrutan och skickar till funktionen \"convertString\"\n\t\t\tp.innerHTML = answer;\t\t// Skriver ut texten från arrayen som skapats i funktionen.\t\n\t\t} catch (error){\n\t\t\tp.classList.add( \"error\"); // Växla CSS-klass, IE10+\n\t\t\tp.innerHTML = error.message;\n\t\t}\n\t\n\t});\n\n\n\n};","undoManager":{"mark":-1,"position":34,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":16,"column":0},"end":{"row":16,"column":2}},"text":"\t\t"},{"action":"removeLines","range":{"start":{"row":10,"column":0},"end":{"row":16,"column":0}},"nl":"\n","lines":["\t\tif (str === \"\")","\t\t{","\t\t\treturn [\"fel fel\"];","\t\t}","\t\telse","\t\t{"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":37,"column":0},"end":{"row":37,"column":4}},"text":"\t\t};"},{"action":"removeLines","range":{"start":{"row":19,"column":0},"end":{"row":37,"column":0}},"nl":"\n","lines":["\t\t\t\t","\t\t\t\t","\t\t\telse if (stringCharacter == stringCharacter.toUpperCase()) ","\t\t\t\t{","\t\t\t\t\tstringCharacter = stringCharacter.toLowerCase();","\t\t\t\t}","\t\t\t","\t\t\t","\t\t\telse if (stringCharacter == stringCharacter.toLowerCase())","\t\t\t\t{","\t\t\t\t\tstringCharacter = stringCharacter.toUpperCase();","\t\t\t\t}","\t\t\t\t","\t\t\t\tstringConverter += stringCharacter;","\t\t\t}","\t\t\t\treturn stringConverter;","\t\t\t}","\t\t\t"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":5},"end":{"row":19,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":4}},"text":"\t\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":19,"column":4},"end":{"row":20,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":20,"column":0},"end":{"row":20,"column":4}},"text":"\t\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":20,"column":4},"end":{"row":20,"column":66}},"text":"\t\t\telse if (stringCharacter == stringCharacter.toUpperCase()) "},{"action":"insertText","range":{"start":{"row":20,"column":66},"end":{"row":21,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":21,"column":0},"end":{"row":36,"column":0}},"lines":["\t\t\t\t{","\t\t\t\t\tstringCharacter = stringCharacter.toLowerCase();","\t\t\t\t}","\t\t\t","\t\t\t","\t\t\telse if (stringCharacter == stringCharacter.toLowerCase())","\t\t\t\t{","\t\t\t\t\tstringCharacter = stringCharacter.toUpperCase();","\t\t\t\t}","\t\t\t\t","\t\t\t\tstringConverter += stringCharacter;","\t\t\t}","\t\t\t\treturn stringConverter;","\t\t\t}","\t\t\t"]},{"action":"insertText","range":{"start":{"row":36,"column":0},"end":{"row":36,"column":4}},"text":"\t\t};"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":18,"column":5},"end":{"row":19,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":19,"column":0},"end":{"row":19,"column":4}},"text":"\t\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":6},"end":{"row":21,"column":7}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":5},"end":{"row":21,"column":6}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":4},"end":{"row":21,"column":5}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":3},"end":{"row":21,"column":4}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":3},"end":{"row":21,"column":8}},"text":"else "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":21,"column":3},"end":{"row":21,"column":4}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":7},"end":{"row":27,"column":8}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":6},"end":{"row":27,"column":7}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":5},"end":{"row":27,"column":6}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":4},"end":{"row":27,"column":5}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":3},"end":{"row":27,"column":4}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":27,"column":3},"end":{"row":27,"column":4}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":21,"column":3},"end":{"row":21,"column":4}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":3},"end":{"row":27,"column":4}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":37,"column":0},"end":{"row":37,"column":4}},"text":"\t\t};"},{"action":"removeLines","range":{"start":{"row":31,"column":0},"end":{"row":37,"column":0}},"nl":"\n","lines":["\t\t\t\t","\t\t\t\tstringConverter += stringCharacter;","\t\t\t}","\t\t\t\treturn stringConverter;","\t\t\t}","\t\t\t"]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":30,"column":5},"end":{"row":31,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":4}},"text":"\t\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":4},"end":{"row":32,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":32,"column":0},"end":{"row":32,"column":4}},"text":"\t\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":32,"column":4},"end":{"row":32,"column":43}},"text":"\t\t\t\tstringConverter += stringCharacter;"},{"action":"insertText","range":{"start":{"row":32,"column":43},"end":{"row":33,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":33,"column":0},"end":{"row":37,"column":0}},"lines":["\t\t\t}","\t\t\t\treturn stringConverter;","\t\t\t}","\t\t\t"]},{"action":"insertText","range":{"start":{"row":37,"column":0},"end":{"row":37,"column":4}},"text":"\t\t};"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":32,"column":7},"end":{"row":32,"column":8}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":32,"column":6},"end":{"row":32,"column":7}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":32,"column":5},"end":{"row":32,"column":6}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":32,"column":4},"end":{"row":32,"column":5}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":32,"column":3},"end":{"row":32,"column":4}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":30,"column":5},"end":{"row":31,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":4}},"text":"\t\t\t\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":3},"end":{"row":31,"column":4}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":2},"end":{"row":31,"column":3}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":1},"end":{"row":31,"column":2}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":0},"end":{"row":31,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":30,"column":5},"end":{"row":31,"column":0}},"text":"\n"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":26,"column":3},"end":{"row":26,"column":3},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1415391770807}