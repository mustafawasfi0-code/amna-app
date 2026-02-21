import { Component } from '@angular/core';
import { Router } from '@angular/router'; // استيراد الموجه
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class Tab1Page {

  // نقوم بتعريف الراوتر داخل المشيد (Constructor)
  constructor(private router: Router) {}

  // هذه هي الوظيفة التي تُنفذ عند الضغط
  goToExercises(area: string) {
    // نطلب من التطبيق الانتقال لصفحة اسمها exercises ونرسل معها اسم المنطقة
    this.router.navigate(['/exercises', { part: area }]);
  }
}