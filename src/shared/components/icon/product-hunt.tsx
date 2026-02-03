interface Props {
  className?: string;
}

export function ProductHunt(props: Props) {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.63 8.78h-2.3v3.66h2.3c1.83 0 3.32-1.49 3.32-3.32 0-1.83-1.49-3.32-3.32-3.32zm0 5.43h-2.3v4.32H9.01V6.51h4.62c3.05 0 5.51 2.46 5.51 5.51 0 3.05-2.46 5.51-5.51 5.51z M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z"
      />
    </svg>
  );
}
