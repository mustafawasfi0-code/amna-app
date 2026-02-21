// تأكد من استيراد الـ Router في أعلى الملف
import { Router } from '@angular/router';

// بداخل الكلاس:
constructor(private router: Router) {}

goToExercises(area: string) {
  // هذا السطر هو المسؤول عن الانتقال الفعلي
  this.router.navigate(['/exercises', { part: area }]);
}