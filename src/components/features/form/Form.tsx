/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react';
import { Button } from 'components';
import styles from './form.module.scss';

export const Form = () => {
  const [isError] = useState(false);
  const [isLoading] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <form
      method="post"
      className={styles.inputBox}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className={styles.inputBox__input}
      />
      <Button
        color="black"
        handleClick={() => {}}
        title="Join the waitlist"
        disabled={isLoading || isError || email.trim().length === 0}
      />

      {isError && <p>Error occured, please, reload the page and try again</p>}
    </form>
  );
};
