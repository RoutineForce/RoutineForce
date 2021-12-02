export interface RoutineGetDto {
  id: number;
  title: string;
  status: 'pending' | 'ongoing' | 'close';
  type: 'health' | 'study' | 'finance' | 'workout' | 'meeting' | 'food' | 'pet';
  day_run: string;
  dues: number;
  penalty: number;
  headcount_min: number;
  headcount_max: number;
  location: string;
  certification_type: 'picture' | 'offline' | 'report';
  intro: string;
  body: string;
  body_type: 'plaintext' | 'markdown';
  image_path: string;
}
