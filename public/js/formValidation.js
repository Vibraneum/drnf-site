// Form Validation Utilities for DRNF Website
// Enhanced validation with real-time feedback and comprehensive error messages

// Validation functions
const FormValidation = {
    // Name validation
    validateName: function(name) {
        const trimmedName = name.trim();

        if (!trimmedName) {
            return { isValid: false, error: 'Name is required' };
        }

        if (trimmedName.length < 2) {
            return { isValid: false, error: 'Name must be at least 2 characters' };
        }

        if (trimmedName.length > 50) {
            return { isValid: false, error: 'Name must be less than 50 characters' };
        }

        // Check for numbers in name
        if (/\d/.test(trimmedName)) {
            return { isValid: false, error: 'Name cannot contain numbers' };
        }

        // Check for special characters (allow spaces, hyphens, apostrophes)
        if (!/^[a-zA-Z\s'-]+$/.test(trimmedName)) {
            return { isValid: false, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' };
        }

        return { isValid: true };
    },

    // Email validation
    validateEmail: function(email) {
        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            return { isValid: true }; // Email is optional if phone is provided
        }

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedEmail)) {
            return { isValid: false, error: 'Please enter a valid email address' };
        }

        // Check for common typos
        const commonTypos = ['gmial.com', 'gmai.com', 'yahooo.com', 'yaho.com', 'outlok.com'];
        const domain = trimmedEmail.split('@')[1]?.toLowerCase();
        if (domain && commonTypos.includes(domain)) {
            return { isValid: false, error: 'Please check your email domain for typos' };
        }

        return { isValid: true };
    },

    // Check if email is personal (for warnings)
    isPersonalEmail: function(email) {
        const domain = email.trim().split('@')[1]?.toLowerCase();
        const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'rediffmail.com'];
        return domain ? personalDomains.includes(domain) : false;
    },

    // Phone validation (Indian format)
    validatePhone: function(phone) {
        const trimmedPhone = phone.trim();

        if (!trimmedPhone) {
            return { isValid: true }; // Phone is optional if email is provided
        }

        // Remove all non-digit characters for validation
        const digitsOnly = trimmedPhone.replace(/\D/g, '');

        // Indian phone number validation
        if (digitsOnly.length === 10) {
            if (!/^[6-9]\d{9}$/.test(digitsOnly)) {
                return { isValid: false, error: 'Indian mobile numbers should start with 6, 7, 8, or 9' };
            }
            return { isValid: true };
        } else if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
            const numberWithoutCode = digitsOnly.substring(2);
            if (!/^[6-9]\d{9}$/.test(numberWithoutCode)) {
                return { isValid: false, error: 'Indian mobile numbers should start with 6, 7, 8, or 9' };
            }
            return { isValid: true };
        } else {
            return { isValid: false, error: 'Please enter a valid 10-digit Indian mobile number' };
        }
    },

    // Format phone number (add +91 if not present)
    formatPhoneNumber: function(phone) {
        const digitsOnly = phone.trim().replace(/\D/g, '');

        if (digitsOnly.length === 10) {
            return `+91 ${digitsOnly}`;
        } else if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
            return `+91 ${digitsOnly.substring(2)}`;
        }

        return phone; // Return as-is if format is unexpected
    },

    // Message validation
    validateMessage: function(message) {
        const trimmedMessage = message.trim();

        if (!trimmedMessage) {
            return { isValid: false, error: 'Message is required' };
        }

        if (trimmedMessage.length < 10) {
            return { isValid: false, error: 'Message must be at least 10 characters' };
        }

        if (trimmedMessage.length > 1000) {
            return { isValid: false, error: 'Message must be less than 1000 characters' };
        }

        return { isValid: true };
    },

    // Combined email OR phone validation
    validateEmailOrPhone: function(email, phone) {
        const hasEmail = email.trim().length > 0;
        const hasPhone = phone.trim().length > 0;

        if (!hasEmail && !hasPhone) {
            return { isValid: false, error: 'Please provide either an email address or phone number' };
        }

        return { isValid: true };
    },

    // Get character count message
    getCharacterCountMessage: function(current, min, max) {
        if (current < min) {
            const needed = min - current;
            return `${needed} more character${needed !== 1 ? 's' : ''} needed`;
        } else if (current > max) {
            const over = current - max;
            return `${over} character${over !== 1 ? 's' : ''} over limit`;
        } else {
            return `${current}/${max} characters`;
        }
    },

    // Sanitize input (remove potentially harmful characters)
    sanitizeInput: function(input) {
        return input
            .trim()
            .replace(/[<>]/g, '') // Remove potential HTML tags
            .replace(/javascript:/gi, '') // Remove javascript: protocol
            .replace(/on\w+=/gi, ''); // Remove event handlers
    },

    // Honeypot validation (for spam prevention)
    validateHoneypot: function(honeypotValue) {
        return honeypotValue.trim() === '';
    },

    // Time-based validation (for spam prevention)
    formStartTime: null,

    startFormTimer: function() {
        this.formStartTime = Date.now();
    },

    validateFormSubmissionTime: function() {
        if (!this.formStartTime) {
            return { isValid: true };
        }

        const timeSpent = Date.now() - this.formStartTime;
        const minTime = 3000; // 3 seconds minimum

        if (timeSpent < minTime) {
            return { isValid: false, error: 'Please take a moment to review your information' };
        }

        return { isValid: true };
    },

    // Show/hide error message
    showError: function(fieldId, errorMessage) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        // Add error class to field
        field.classList.add('error');
        field.classList.remove('success');

        // Find or create error message element
        let errorElement = field.parentElement.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('p');
            errorElement.className = 'error-message';
            field.parentElement.appendChild(errorElement);
        }

        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
    },

    hideError: function(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        // Remove error class from field
        field.classList.remove('error');

        // Hide error message
        const errorElement = field.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    },

    showSuccess: function(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        // Add success class to field
        field.classList.add('success');
        field.classList.remove('error');

        // Hide error message
        const errorElement = field.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    },

    // Show warning (for personal emails)
    showWarning: function(fieldId, warningMessage) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        // Find or create warning message element
        let warningElement = field.parentElement.querySelector('.warning-message');
        if (!warningElement) {
            warningElement = document.createElement('p');
            warningElement.className = 'warning-message';
            field.parentElement.appendChild(warningElement);
        }

        warningElement.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${warningMessage}`;
        warningElement.style.display = 'block';
    },

    hideWarning: function(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        const warningElement = field.parentElement.querySelector('.warning-message');
        if (warningElement) {
            warningElement.style.display = 'none';
        }
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormValidation;
}
