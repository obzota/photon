exports.save = function (key) {
	switch(key) {
		case '&':
		case '1':
			sendAnswer(1);
			return true; break;
		case 'é':
		case '2':
			sendAnswer(2);
			return true; break;
		case '"':
		case '3':
			sendAnswer(3);
			return true; break;
		case '\'':
		case '4':
			sendAnswer(4);
			return true; break;
		case '(':
		case '5':
			sendAnswer(5);
			return true; break;
		case '§':
		case '6':
			sendAnswer(6);
			return true; break;
		case 'è':
		case '7':
			sendAnswer(7);
			return true; break;
		case '!':
		case '8':
			sendAnswer(8);
			return true; break;
		case 'ç':
		case '9':
			sendAnswer(9);
			return true; break;
		case 'à':
		case '0':
			sendAnswer(0);
			return true; break;
		case 'a':
			sendAnswer(10);
			return true; break;
		case 'z':
			sendAnswer(11);
			return true; break;
		case 'e':
			sendAnswer(12);
			return true; break;
		case 'r':
			sendAnswer(13);
			return true; break;
		case 't':
			sendAnswer(14);
			return true; break;
		case 'y':
			sendAnswer(15);
			return true; break;
		case 'u':
			sendAnswer(16);
			return true; break;
		case 'i':
			sendAnswer(17);
			return true; break;
		case 'o':
			sendAnswer(18);
			return true; break;
		case 'p':
			sendAnswer(19);
			return true; break;
		case 'q':
			sendAnswer(20);
			return true; break;
		case 's':
			sendAnswer(21);
			return true; break;
		case 'd':
			sendAnswer(22);
			return true; break;
		case 'f':
			sendAnswer(23);
			return true; break;
		case 'g':
			sendAnswer(24);
			return true; break;
		case 'h':
			sendAnswer(25);
			return true; break;
		case 'j':
			sendAnswer(26);
			return true; break;
		case 'k':
			sendAnswer(27);
			return true; break;
		case 'l':
			sendAnswer(28);
			return true; break;
		case 'm':
			sendAnswer(29);
			return true; break;
		default:
			return false;
	}
}

function sendAnswer(i) {

}