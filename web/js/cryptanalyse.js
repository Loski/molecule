//Tentative dans le train !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function frequence(texte, taille){
	var arrayTxt = [];
	var txttmp = texte;
	arrayFreq = [];
	for(var i = 0;  i < taille; i++){ // on coupe le txt, puis on enlève le premier caractère pour faire différente série de caractère
		arrayTxt.push(couperTexte(txttmp, taille)); // def dans hill
		txttmp = txttmp.substring(1, txttmp.length);    //fction qui retire le premier caractère
		arrayFreq[i] = [];
	}
	arrayFreq[taille] = []; // on renvoie cette partie qui concatène tout.
	for(i = 0; i < taille; i++){
		arrayTxt[i].forEach(function(element, index, array){
			if(!arrayFreq[i].hasOwnProperty(element)){ // S l'élément n'est pas déjà présent le tableau donc déjà test
				arrayFreq[i][element] = 0;   // add avec key = element
				arrayTxt[i].forEach(function(element2, index, array){
					if(element === element2){
						arrayFreq[i][element]++;
					}
				});
			}
		});
	}
	//suprimme les multiples valeurs de arrayTxt
	for(i = 0; i < taille; i++)
		arrayTxt[i] = uniq_fast(arrayTxt[i]);
	for(i = 0; i < taille; i++){
		var arrayValue = [];
		arrayTxt[i].forEach(function(element2, index, array){
			if(arrayFreq[taille].hasOwnProperty(element2)){
				arrayFreq[taille][element2] += arrayFreq[i][element2];
			}
			else{
				arrayFreq[taille][element2] = arrayFreq[i][element2];
			}
			arrayValue.push(element2);
		});
	}
	arrayFreq[taille].sort(compare);
	return arrayFreq[taille];
}
function compare(x, y) {
    return y - x;
}
// créer les arrays des lettres les plus probable
function  arrayFreqApparition(n){
	switch(n){
		case 1:
			return "easintrluodcmpvgfqhbxjyzkw".split('');
		case 2:
			return "es,le,de,re,en,on,nt,er,te,et,el,an,se,la,ai,ne,ou,qu,me,it,ie,em,ed,ur,is,ec,ue,ti,ra,ns,in,ta".split(',');
		case 3: 
			return "ent,que,les,ede,des,ela,ion,ait,res".split(',');
		case 4:
			return "tion,ment,ique,emen,dela,elle".split(',');
	} 
	
}

/**VOL******/
function uniq_fast(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;

}

//décrypte juste par 2
function cryptanalyseHill(texte, taille){
	var alphabet =  creerAlphabet(26);
//	var frequenceMax = frequence(texte,4).ZGRF;
	var frequenceMax = "fthe";
	var motMaxFrance = arrayFreqApparition(4);
	var txt1 =	frequenceMax.substring(0,2).toUpperCase();
	var txt2 = frequenceMax.substring(2,4).toUpperCase();
	var matrice = [];
	for(var i = 0; i < 2; i++){
		matrice.push(alphabet.indexOf(txt1[i]));
		matrice.push(alphabet.indexOf(txt2[i]));
	}
	var matriceInverse = new Matrice(matrice).inverserMatrice(26);
	return crypte_hill(texte, matriceInverse, 26);
}
function key_Vigenere(alphabet,text,keyLength)
{
	var texte_espace ="";
	for(var i=0;i<text.length;i+=parseInt(keyLength))
	{
		texte_espace += text.substr(i,keyLength)+" ";
		console.log(i+texte_espace);
	}
	
	document.getElementById('textecode').value=texte_espace;

	/*key="";
	for(int i=0;i<keyLength;i+=keyLength)
	{
		var decalage = calculDecalage();
	
		key+=alphabet.charAt(decalage);
	}*/
}


$(document).ready(function()
{ 
	$("#cryptanalyseDecrypt").mousedown(function()
	{
		var texte=document.getElementById('textecode').value;
		var keylength = document.getElementById("keyCryptanalyse").value;
	
		key_Vigenere("ABCDEFGHIJKLMNOPQRSTUVWXYZ",texte,keylength);
	});
});
