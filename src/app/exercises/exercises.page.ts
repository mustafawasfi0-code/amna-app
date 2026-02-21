import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { timeOutline, flashOutline, playCircleOutline, chevronBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonIcon]
})
export class ExercisesPage implements OnInit {
  selectedPart: string = '';
  
  allExercises = [
    { name: 'Relief Routine', duration: '5 min', level: 'Easy', type: 'neck', videoId: 'sr3hW43i9tg' },
    { name: 'Mobility Stretch', duration: '8 min', level: 'Medium', type: 'shoulder', videoId: 'p0742JOIjzQ' },
    { name: 'Basic Knee Care', duration: '7 min', level: 'Easy', type: 'knee', videoId: 'o5b0gS7wI1k' },
    { name: 'Lower Back Fix', duration: '10 min', level: 'Hard', type: 'back', videoId: '1pOMjt6gkiE' },
    { name: 'Ankle Stability', duration: '6 min', level: 'Easy', type: 'ankle', videoId: 'Z5ZBsxHJzr0' },
    { name: 'Hips Opening', duration: '12 min', level: 'Medium', type: 'hips', videoId: 'xzdvuM4iy4A' }
  ];

  filteredExercises: any[] = [];

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    // إضافة الأيقونات بما فيها أيقونة الرجوع
    addIcons({ timeOutline, flashOutline, playCircleOutline, chevronBackOutline });
  }

  ngOnInit() {
    this.selectedPart = this.route.snapshot.paramMap.get('part') || 'Exercises';
    this.filteredExercises = this.allExercises.filter(ex => ex.type === this.selectedPart);
  }

  getSafeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }
}