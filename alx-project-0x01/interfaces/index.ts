export interface PostData {
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
