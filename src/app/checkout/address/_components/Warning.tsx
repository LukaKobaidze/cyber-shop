import styles from "./Warning.module.scss";

interface Props {}

export default function Warning(props: Props) {
  return (
    <div className={styles.warning}>
      <p>
        Welcome to our shipping page! To ensure your orders reach you accurately
        and on time, please make sure to add your shipping address. It's easy:
      </p>
      <ul>
        <li>
          <strong>Click the Plus Button:</strong> Look for the plus button icon
          and give it a click. This will prompt you to add a new shipping
          address.
        </li>
        <li>
          <strong>Fill in the Details:</strong> Once you've clicked the plus
          button, a form will appear where you can enter your shipping address
          details. Be sure to provide accurate information to avoid any delivery
          delays.
        </li>
        <li>
          <strong>Review and Save:</strong> After filling in the required
          fields, take a moment to review your shipping address for accuracy.
          Once you're satisfied, hit the save button to store your address for
          future orders.
        </li>
      </ul>
      <p>
        Adding your shipping address ensures a smooth and hassle-free shopping
        experience. If you have any questions or need assistance, don't hesitate
        to reach out to our support team. Happy shopping!
      </p>
    </div>
  );
}
