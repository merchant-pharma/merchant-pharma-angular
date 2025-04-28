export interface FacultyMember {
    id: string;
    name: string;
    photoUrl: string;
    role: string;
    department: string;
    qualifications: string;
    publications: string[];
    socialLinks?: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
      linkedin?: string;
      // Add other social media links as needed
    };
    // Add other relevant properties
  }