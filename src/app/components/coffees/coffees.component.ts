import { CommonModule } from '@angular/common';  // Mengimpor CommonModule agar dapat menggunakan fitur-fitur dasar Angular seperti *ngIf dan *ngFor
import { Component, OnInit, inject } from '@angular/core';  // Mengimpor dekorator Component, lifecycle hook OnInit, dan inject untuk injeksi HttpClient pada komponen standalone
import { HttpClient } from '@angular/common/http';  // Mengimpor HttpClient untuk melakukan HTTP request

@Component({
  selector: 'app-coffees',  // Nama selector untuk komponen ini. Komponen akan digunakan di template dengan tag <app-coffees></app-coffees>
  standalone: true,  // Menyatakan bahwa komponen ini adalah komponen standalone dan tidak membutuhkan module tambahan
  imports: [CommonModule],  // Mengimpor CommonModule untuk memungkinkan penggunaan direktif Angular standar seperti *ngIf dan *ngFor di template
  templateUrl: './coffees.component.html',  // Path ke file template HTML untuk komponen ini
  styleUrl: './coffees.component.css'  // Path ke file CSS untuk komponen ini
})
export class CoffeesComponent implements OnInit {  // Deklarasi komponen dengan mengimplementasikan lifecycle hook OnInit
    coffees: any[] = [];  // Mendeklarasikan properti coffees yang akan menyimpan data yang diterima dari API
  apiUrl = 'https://uas-paw2-backends.vercel.app/api/coffee/';  // URL API yang digunakan untuk mendapatkan data coffees
  isLoading = true;  // Properti untuk status loading, digunakan untuk menunjukkan loader saat data sedang diambil

  private http = inject(HttpClient);  // Menggunakan inject untuk mendapatkan instance HttpClient di dalam komponen standalone (untuk Angular versi terbaru yang mendukung pendekatan ini)

  ngOnInit(): void {  // Lifecycle hook ngOnInit dipanggil saat komponen diinisialisasi
    // Mengambil data dari API menggunakan HttpClient
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {  // Callback untuk menangani data yang diterima dari API
        this.coffees = data;  // Menyimpan data yang diterima ke dalam properti coffees
        console.log('Data Coffees:', this.coffees);  // Mencetak data coffees di console untuk debugging
        this.isLoading = false;  // Mengubah status loading menjadi false, yang akan menghentikan tampilan loader
      },
      error: (err) => {  // Callback untuk menangani jika terjadi error saat mengambil data
        console.error('Error fetching coffees data:', err);  // Mencetak error di console untuk debugging
        this.isLoading = false;  // Tetap mengubah status loading menjadi false meskipun terjadi error, untuk menghentikan loader
      },
    });
  }
}