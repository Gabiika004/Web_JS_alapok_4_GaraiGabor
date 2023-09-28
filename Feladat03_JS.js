document.getElementById('order')
    .addEventListener('click', () => {

        // Megrendelő adatai
        let nev = document.forms['pizza_rendel']['Tnev'].value;
        let tel = document.forms['pizza_rendel']['telSz'].value;
        let iranyito = document.forms['pizza_rendel']['iranyitoSz'].value;
        let varos = document.forms['pizza_rendel']['varosN'].value;
        let utca = document.forms['pizza_rendel']['utcaN'].value;
        let haz = document.forms['pizza_rendel']['hazSz'].value;

        // Pizza adatok
        let alap = document.forms['pizza_rendel']['alap'].value;
        let feltetek = document.forms['pizza_rendel']['feltetel'];
        let other = document.forms['pizza_rendel']['other'].value;
        let feltetekKivalasztott = [];

        // For ciklus a feltétekhez

        for (let index = 0; index < feltetek.length; index++) {
            const element = feltetek[index];
            if (element.type == 'checkbox' && element.checked == true) {
                feltetekKivalasztott.push(element.value);
            }
        }

        // Kitöltött mezők

        let minden_kitoltve = true;
        if (nev === '' ) {
            minden_kitoltve = false;
            alert('A név kitöltése kötelező!')
        }
        if (tel === '' ) {
            minden_kitoltve = false;
            alert('A telefonszám kitöltése kötelező!')
        }
        if (iranyito === '') {
            minden_kitoltve = false;
            alert('Az irányítószám megadása kötelező!')
        }
        if (varos === '') {
            minden_kitoltve = false;
            alert('A város kitöltése kötelező!')
        }
        if (utca === '') {
            minden_kitoltve = false;
            alert('Az utca kitöltése kötelező!')
        }
        if (haz === '') {
            minden_kitoltve = false;
            alert('A házszám megadása kötelező!')
        }
        if (feltetekKivalasztott.length < 2) {
            minden_kitoltve = false;
            alert('Válasszon ki legalább 2 feltétet!')
        }

        if (minden_kitoltve){

            let order = {
                nev: nev,
                tel: tel,
                iranyito: iranyito,
                varos: varos,
                utca: utca,
                haz: haz,
                alap: alap,
                feltetek: feltetekKivalasztott,
                other: other
              }

              console.log(order)
        };
          
    })