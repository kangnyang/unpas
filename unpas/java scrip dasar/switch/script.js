var item= prompt(" Masukan makanan/minuman \n (cth: daging, susu, nasi, softdrink, burger");

switch(item){
    case "daging":
    case"susu":
    case "nasi":
        alert(item + " ,makanan/minuma sehat");
    break;
    case "softdrink":
    case "burger":
        alert(item + " ,makanan/minuma tidak sehat ");
    default:
        alert(item + " , masakan/minuman yang ada masukan salah")
}