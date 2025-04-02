import React, { useState, useEffect } from 'react';

interface BotProtectionProps {
  onProtectionReady?: (protectionData: {
    honeypot: string;
    formToken: string;
  }) => void;
}

export const useBotProtection = () => {
  const [honeypot, setHoneypot] = useState('');
  const [formToken, setFormToken] = useState('');

  useEffect(() => {
    const token = Math.random().toString(36).substring(2);
    setFormToken(token);
  }, []);

  const validateSubmission = () => {
    return !honeypot;
  };

  const BotProtectionField: React.FC<BotProtectionProps> = ({
    onProtectionReady,
  }) => {
    useEffect(() => {
      if (onProtectionReady) {
        onProtectionReady({ honeypot, formToken });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [honeypot, formToken, onProtectionReady]);

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
