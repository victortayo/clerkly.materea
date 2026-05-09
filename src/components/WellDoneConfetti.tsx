import { useEffect } from 'react';
import './WellDoneConfetti.css';

interface WellDoneConfettiProps {
    onComplete: () => void;
}

const WellDoneConfetti = ({ onComplete }: WellDoneConfettiProps) => {
    useEffect(() => {
        const container = document.createElement('div');
        container.className = 'confetti-container';
        document.body.appendChild(container);

        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];

        for (let i = 0; i < 200; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`
            container.appendChild(confetti);
        }

        // The animation is set to run for a maximum of 8 seconds (3s duration + 5s delay)
        // We will remove the container after 8 seconds
        const cleanupTimer = setTimeout(() => {
            document.body.removeChild(container);
            onComplete();
        }, 8000); // 3s + 5s

        return () => {
            clearTimeout(cleanupTimer);
            if (document.body.contains(container)) {
                document.body.removeChild(container);
            }
        };
    }, [onComplete]);

    return null;
};

export default WellDoneConfetti;
