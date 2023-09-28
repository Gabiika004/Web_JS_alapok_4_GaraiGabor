document.getElementById('Regist')
    .addEventListener('click', () => {

        // Regisztrációs adatok 
        let nev = document.forms['regisztral']['nev'].value;
        let pass = document.forms['regisztral']['jelszo'].value;
        let pass2 = document.forms['regisztral']['jelszo2'].value;
        let email = document.forms['regisztral']['email'].value;
        let born = document.forms['regisztral']['date'].value;
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        let minden_kitoltve = true;
        if (nev === '' ) {
            minden_kitoltve = false;
            alert('A név kitöltése kötelező!')
        }
        if (pass === '') {
            minden_kitoltve = false;
            alert('A jelszó megadása kötelező!')
        }
        if (pass2 === '' && pass != "") {
            minden_kitoltve = false;
            alert('A jelszó ismétlése kötelező!')
        }
        if (email === '') {
            minden_kitoltve = false;
            alert('Az email kitöltése kötelező!')
        }
        if (born === '') {
            minden_kitoltve = false;
            alert('A születési dátum megadása kötelező!')
        }

        if (pass != pass2){
            minden_kitoltve = false;
            alert('A jelszavak nem egyeznek!')
        }
         
        if (pass.length < 5 && pass.length < 16) {
            minden_kitoltve = false;
            alert("A jelszónak legalább 5 karakterből kell állnia!")
        }
        else if (pass.search(/[a-z]/) < 0) {
            minden_kitoltve = false;
            alert("A jelszónak tartalmaznia kell kisbetűt!")
        } 
        else if(pass.search(/[A-Z]/) < 0) {
            minden_kitoltve = false;
            alert("A jelszónak tartalmaznia kell nagybetűt!")
        } 
        else if (pass.search(/[0-9]/) < 0) {
            minden_kitoltve = false;
            alert("A jelszónak tartalmaznia kell számot!")
        } 
        else if (specialChars.test(pass) == false) {
            minden_kitoltve = false;
            alert("A jelszónak tartalmaznia kell speciális karaktert!")
        } 
        if(email.search("@") && email.search(".")){
            minden_kitoltve = false;
            alert('Nem megfelelő az e-mail cím!')
        }

        if (minden_kitoltve == true){

            let felhasznalo = {
                nev: nev,
                pass: pass,
                pass2: "ugyan az",
                email: email,
                born: born,
              }

              console.log(felhasznalo)
        };
    });