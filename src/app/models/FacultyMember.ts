export interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  specialization?: string;
  contactNumber?: string;
  joiningDate: Date;
  // Add any other relevant properties from your backend entity
}