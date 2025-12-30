import React, { useEffect } from 'react'
import { Button } from '../components/Button'
import { Modal } from '../components/Modal'
import { Form } from '../components/Form'
import { Card } from '../components/Card'
import { processData } from '../utils/helpers'
import { validateEmail } from '../utils/validators'
import { formatDate } from '../utils/formatters'
import { UserService } from '../services/UserService'
import { ApiService } from '../services/ApiService'
import { AuthService } from '../services/AuthService'
import { fetchUsers } from '../api/users'
import { fetchPosts } from '../api/posts'
import { useData } from '../hooks/useData'
import { useAuth } from '../hooks/useAuth'

export function TestErrorsPage() {
  useEffect(() => {
    // Trigger all errors after page loads
    const triggerErrors = async () => {
      // Wait a bit for page to render
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('🚨 Triggering all test errors...')
      
      // Error 5: processData
      try {
        processData(undefined as any)
      } catch (e) {
        console.log('✅ Error 5 triggered:', e)
      }
      
      // Error 6: validateEmail
      try {
        validateEmail('test@example.com')
      } catch (e) {
        console.log('✅ Error 6 triggered:', e)
      }
      
      // Error 7: formatDate
      try {
        formatDate(undefined as any)
      } catch (e) {
        console.log('✅ Error 7 triggered:', e)
      }
      
      // Error 8: UserService
      try {
        await new UserService().getUser('123')
      } catch (e) {
        console.log('✅ Error 8 triggered:', e)
      }
      
      // Error 9: ApiService
      try {
        await new ApiService().request('invalid-url')
      } catch (e) {
        console.log('✅ Error 9 triggered:', e)
      }
      
      // Error 10: AuthService
      try {
        new AuthService().getToken()
      } catch (e) {
        console.log('✅ Error 10 triggered:', e)
      }
      
      // Error 13: fetchUsers
      try {
        await fetchUsers()
      } catch (e) {
        console.log('✅ Error 13 triggered:', e)
      }
      
      // Error 14: fetchPosts
      try {
        await fetchPosts()
      } catch (e) {
        console.log('✅ Error 14 triggered:', e)
      }
      
      console.log('✅ All errors triggered! Check Sentry.')
    }
    
    triggerErrors()
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Test Errors Page</h1>
      <p>This page automatically triggers all 16 errors. Check Sentry for the errors.</p>
      
      {/* These components will error when rendered */}
      <div style={{ marginTop: '20px' }}>
        <h2>Component Errors (will error on render):</h2>
        <Button onClick={() => {}}>Test Button</Button>
        <Modal isOpen={true} onClose={() => {}} />
        <Form fields={undefined} />
        <Card card={undefined} />
      </div>
      
      <ComponentWithHooks />
    </div>
  )
}

function ComponentWithHooks() {
  // Error 11: useData hook
  const data = useData('/api/data')
  
  // Error 12: useAuth hook
  const auth = useAuth()
  
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Hook Errors:</h2>
      <p>Hooks will error when called</p>
    </div>
  )
}

