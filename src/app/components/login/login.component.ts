// Mengimpor CommonModule untuk menggunakan fitur-fitur dasar Angular seperti *ngIf dan *ngFor
import { CommonModule } from '@angular/common';
// Mengimpor Component dari Angular untuk membuat komponen
import { Component } from '@angular/core';
// Mengimpor FormBuilder, FormGroup, ReactiveFormsModule, dan Validators untuk bekerja dengan form dan validasi di Angular
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// Mengimpor HttpClient untuk melakukan HTTP request
import { HttpClient } from '@angular/common/http';
// Mengimpor Router untuk menavigasi antara halaman setelah login berhasil
import { Router } from '@angular/router';

// Deklarasi komponen dengan selector, template, dan styling
@Component({
  selector: 'app-login', // Selector untuk komponen ini yang digunakan di HTML
  templateUrl: './login.component.html', // Template HTML yang terkait dengan komponen ini
  imports: [CommonModule, ReactiveFormsModule], // Mengimpor CommonModule dan ReactiveFormsModule agar bisa menggunakan fitur form dan direktif Angular standar
  styleUrls: ['./login.component.css'], // Styling CSS untuk komponen ini
})
export class LoginComponent {
  // Mendeklarasikan FormGroup untuk form login
  loginForm: FormGroup;
  // Variabel untuk menandakan apakah sedang mengirimkan data (untuk menampilkan status loading)
  isSubmitting: boolean = false;
  // URL endpoint untuk API login
  apiUrl = 'https://uas-paw2-backends.vercel.app/api/auth/login/'; // API login endpoint

  // Konstruktor untuk injeksi dependensi
  constructor(
    private fb: FormBuilder, // Injeksi FormBuilder untuk membuat form
    private http: HttpClient, // Injeksi HttpClient untuk melakukan HTTP request
    private router: Router // Injeksi Router untuk navigasi halaman setelah login
  ) {
    // Membuat FormGroup untuk form login dengan validasi
    this.loginForm = this.fb.group({
      // Input email dengan validasi wajib dan format email
      email: ['', [Validators.required, Validators.email]],
      // Input password dengan validasi wajib dan panjang minimal 6 karakter
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Method untuk menangani form submission
  onLogin() {
    // Memeriksa apakah form tidak valid
    if (this.loginForm.invalid) {
      // Menandai semua field sebagai touched untuk menampilkan pesan error validasi
      this.loginForm.markAllAsTouched();
      return; // Menghentikan proses jika form tidak valid
    }

    // Menandakan bahwa form sedang diproses (loading)
    this.isSubmitting = true;

    // Mengambil nilai email dan password dari form
    const { email, password } = this.loginForm.value;

    // Mengirim request POST ke API login dengan email dan password
    this.http.post(this.apiUrl, { email, password }).subscribe({
      next: (response: any) => {
        // Memeriksa apakah token ada dalam response
        if (response.token) {
          // Menyimpan token yang diterima ke localStorage
          localStorage.setItem('loginToken', response.token);
          console.log('Login berhasil:', response);

          // Mengarahkan ke halaman coffees setelah login berhasil
          window.location.href = '/coffees'; // Menggunakan window.location.href untuk mereload halaman dan mengarahkan ke /coffees
          // this.router.navigate(['/coffees']);  // Alternatif menggunakan Angular router (jika tidak menggunakan window.location.href)
        } else {
          // Jika tidak ada token dalam response, tampilkan pesan error
          console.error('Token tidak ditemukan dalam response:', response);
          alert('Login gagal. Tidak ada token.');
        }
        // Mengubah status submitting menjadi false setelah proses selesai
        this.isSubmitting = false;
      },
      error: (error) => {
        // Jika terjadi error saat login
        console.error('Login gagal:', error);
        alert('Login gagal. Periksa email atau password.'); // Menampilkan alert jika login gagal
        this.isSubmitting = false; // Mengubah status submitting menjadi false setelah proses selesai
      },
    });
  }
}
