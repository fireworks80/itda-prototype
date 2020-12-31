import { flagList } from '../../lib/flagList';
export default function Flags() {
  return (
    <form className='c-card flags'>
      <fieldset>
        <legend className='c-card__tit'>Flags</legend>
        {flagList.map((flag, idx) => (
          <label key={`${flag}-flags__lb`} htmlFor={flag} className='flags__label'>
            <input type='checkbox' id={flag} className='a11y' />
            <span>{flag}</span>
          </label>
        ))}
      </fieldset>
    </form>
  );
}
