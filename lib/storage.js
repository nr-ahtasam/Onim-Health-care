import { toast } from 'sonner';

export function getStoredPatient() {
  try {
    const raw = localStorage.getItem("patient");
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    toast.error('Failed to parse patient data from localStorage');
    console.error("Failed to parse patient data from localStorage:", error);
    return null;
  }
}

export function setStoredPatient(data) {
  try {
    localStorage.setItem("patient", JSON.stringify(data));
  } catch (error) {
    toast.error('Failed to store patient data in localStorage');
    console.error("Failed to store patient data in localStorage:", error);
  }
}

export function removeStoredPatient() {
  localStorage.removeItem("patient");
  window.location.reload();
}
