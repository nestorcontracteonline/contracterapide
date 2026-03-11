'use server'

import { supabaseAdmin } from '@/lib/supabase'

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get('email') as string

  if (!email || !email.includes('@')) {
    return { success: false, error: 'Email invalid.' }
  }

  try {
    const { error } = await supabaseAdmin
      .from('leads')
      .insert({ email: email.toLowerCase().trim(), source: 'homepage-newsletter' })

    if (error) {
      if (error.code === '23505') {
        // unique violation — already subscribed
        return { success: true, message: 'Ești deja abonat! Te vom contacta curând.' }
      }
      throw error
    }

    return { success: true, message: 'Super! Vei primi modelul gratuit pe email.' }
  } catch (err) {
    console.error('Newsletter subscribe error:', err)
    return { success: false, error: 'Eroare server. Încearcă din nou.' }
  }
}
