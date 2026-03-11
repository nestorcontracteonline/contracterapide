import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Apple from 'next-auth/providers/apple'
import { supabaseAdmin } from '@/lib/supabase'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Apple({
      clientId: process.env.APPLE_ID!,
      clientSecret: process.env.APPLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false
      // Upsert user in Supabase
      try {
        await supabaseAdmin.from('users').upsert({
          email: user.email,
          name: user.name,
          avatar_url: user.image,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'email' })
      } catch (e) {
        console.error('User upsert error:', e)
      }
      return true
    },
    async session({ session }) {
      return session
    },
    async jwt({ token }) {
      return token
    },
  },
  pages: {
    signIn: '/autentificare',
    error: '/autentificare',
  },
  secret: process.env.NEXTAUTH_SECRET,
})
