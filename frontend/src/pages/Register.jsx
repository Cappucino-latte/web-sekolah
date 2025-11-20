import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import styles from './Register.module.css';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validasi email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(formData.email)) {
            setError('Format email tidak valid');
            return;
        }

        // Validasi password
        if (formData.password !== formData.confirmPassword) {
            setError('Password tidak cocok');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password harus minimal 6 karakter');
            return;
        }

        try {
            // Register dengan Supabase
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        role: 'admin'
                    }
                }
            });

            if (error) throw error;

            if (data.user) {
                // Tambahkan data admin ke tabel custom
                const { error: profileError } = await supabase
                    .from('admin_profiles')
                    .insert([
                        {
                            user_id: data.user.id,
                            email: formData.email,
                            role: 'admin'
                        }
                    ]);

                if (profileError) throw profileError;
            }

            // Registrasi berhasil
            alert('Registrasi berhasil! Silakan cek email Anda untuk verifikasi.');
            navigate('/login');
        } catch (err) {
            console.error('Registration error:', err);
            setError(err.message);
        }
    };

    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerBox}>
                <h2>Register Admin</h2>
                {error && <div className={styles.error}>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="confirmPassword">Konfirmasi Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.registerButton}>
                        Register
                    </button>
                    <div className={styles.loginLink}>
                        Sudah punya akun? <Link to="/login">Login di sini</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;