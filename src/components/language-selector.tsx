"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, Globe } from 'lucide-react'

const languages = [
  { code: 'EN', name: 'English', flag: '🇺🇸' },
  { code: 'TR', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'EE', name: 'Eesti', flag: '🇪🇪' },
]

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        <Globe className="h-4 w-4" />
        <span>{selectedLanguage.flag}</span>
        <span className="hidden sm:inline">{selectedLanguage.code}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-md border bg-background shadow-lg">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setSelectedLanguage(language)
                setIsOpen(false)
              }}
              className="flex w-full items-center space-x-3 px-4 py-2 text-left hover:bg-accent transition-colors"
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
