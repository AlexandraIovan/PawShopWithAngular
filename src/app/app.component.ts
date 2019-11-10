import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  paw = 'assets/poze/paw.png';
  isLoggedIn = false;
  isDropdownOpen = false;
  constructor(private router: Router) {

    /**
     * asta ii lambda function: () => {} ii asemanator cu function() {} si te lasa sa pui this.
     * router.events.subscribe adauga functia la evenimentul de rutare pagini (cand treci de la /cats la /products)
     * functia se apeleaza la fiecare navigare
     * navigation instanceof NavigationEnd && navigation.url!=='/login' - verifica daca avem NavigationEnd object cu url si sa nu fie /login
     * router.navigate(['/login']); - face redirect la login daca ruta nu este deja /login
     */

    router.events.subscribe((navigation) => {
      const userDataString = localStorage.getItem("pawshop");
      console.log (navigation);
      if (userDataString){
        this.isLoggedIn = true;
      } else if (navigation instanceof NavigationEnd && navigation.url!=='/login'){
        router.navigate(['/login']);
      }
    });
  }
  logout (){
    this.isLoggedIn = false;
    localStorage.removeItem("pawshop");
    this.router.navigate(['/login']);

  }
  switchDropdown (){
    this.isDropdownOpen = !this.isDropdownOpen;

  }
}


