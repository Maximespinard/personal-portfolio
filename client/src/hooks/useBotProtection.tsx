import React, { useState, useEffect } from 'react';

interface BotProtectionProps {
  onProtectionReady?: (protectionData: { formToken: string }) => void;
}

interface BotProtectionReturn {
  BotProtectionField: React.FC<BotProtectionProps>;
  honeypot: string;
  formToken: string;
  validateSubmission: () => boolean;
}

export const useBotProtection = (): BotProtectionReturn => {
  const [honeypot, setHoneypot] = useState('');
  const [formToken, setFormToken] = useState('');
  const [formStartTime] = useState(Date.now());

  useEffect(() => {
    const token = Math.random().toString(36).substring(2);
    setFormToken(token);
  }, []);

  const validateSubmission = (): boolean => {
    const submissionTime = Date.now();
    const timeTaken = submissionTime - formStartTime;
    return !(honeypot.trim() !== '' || timeTaken < 3000);
  };

  const BotProtectionField: React.FC<BotProtectionProps> = ({
    onProtectionReady,
  }) => {
    useEffect(() => {
      if (onProtectionReady) {
        onProtectionReady({ formToken });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formToken, onProtectionReady]);

    return (
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        style={{
          position: 'absolute',
          opacity: 0,
          height: 0,
          width: 0,
          top: 0,
          left: 0,
        }}
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />
    );
  };

  return {
    BotProtectionField,
    honeypot,
    formToken,
    validateSubmission,
  };
};
