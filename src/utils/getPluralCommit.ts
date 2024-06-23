export const getPlural = (count: number): string => {
  const pluralRules = new Intl.PluralRules('en-US')
  const rule = pluralRules.select(count) as 'one' | 'other'
  const forms = {
    one: 'commit',
    other: 'commits',
  }
  return `${forms[rule] || forms['other']}`
}
