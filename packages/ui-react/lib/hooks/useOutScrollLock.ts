import { useEffect } from 'react'

// Custom hook to prevent scrolling when a modal is open
export const useOutScrollLock = (isOpen: boolean) => {
  useEffect(() => {
    // Function to disable scroll
    const disableScroll = () => {
      document.body.style.overflow = 'hidden'
    }

    // Function to enable scroll
    const enableScroll = () => {
      document.body.style.overflow = 'auto'
    }

    if (isOpen) {
      disableScroll() // Disable scroll when the modal is open
    } else {
      enableScroll() // Enable scroll when the modal is closed
    }

    // Clean up the effect
    return () => {
      enableScroll() // Make sure to enable scroll when the component unmounts
    }
  }, [isOpen])
}
