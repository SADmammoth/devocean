export default function useProgressAnimation(init) {
  const [progressState, setProgress] = useState(init);
  const [interval, saveInterval] = useState(null);

  useEffect(() => {
    if (interval) {
      clearInterval(interval);
    }

    saveInterval(
      setInterval(() => {
        setProgress((progress) => {
          if (progress < 100) {
            return progress + 1;
          } else {
            return 0;
          }
        });
      }, 10),
    );
  }, []);

  return progressState;
}
