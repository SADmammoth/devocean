import _ from 'lodash';
import { getLocale } from 'umi';

function RelativeDate(input) {
  if (input instanceof RelativeDate) {
    this.value = input.value;
    return;
  }

  this.value = new Date(input);
}

RelativeDate.prototype.toString = function () {
  const now = new Date();
  const rtl = new Intl.RelativeTimeFormat(getLocale());

  const { seconds, ...withoutSeconds } = getDiffs(this.value, now);
  if (seconds < 0 && onlyZeros(withoutSeconds)) {
    return 'recently';
  }

  if (seconds < 0 && onlyZeros(withoutSeconds)) {
    return 'in a few seconds';
  }

  const { minutes, ...withoutMinutes } = withoutSeconds;
  if (minutes && onlyZeros(withoutMinutes)) {
    return rtl.format(minutes, 'minute');
  }

  const { hours, ...withoutHours } = withoutMinutes;

  if (hours && onlyZeros(withoutHours)) {
    return rtl.format(hours, 'hours');
  }

  const { days, ...withoutDays } = withoutHours;

  if (days && onlyZeros(withoutDays)) {
    return rtl.format(days, 'day');
  }

  const { months, years } = withoutDays;

  if (months && years === 0) {
    return rtl.format(months, 'month');
  }

  if (years) {
    return rtl.format(years, 'year');
  }

  return 'now';
};

function getDiffs(date, now) {
  const years = date.getFullYear() - now.getFullYear();
  const months = date.getMonth() - now.getMonth();
  const days = date.getDate() - now.getDate();
  const hours = date.getHours() - now.getHours();
  const minutes = date.getMinutes() - now.getMinutes();
  const seconds = date.getSeconds() - now.getSeconds();

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}

function onlyZeros(object) {
  return Object.values(object).every((value) => value === 0);
}

window.RelativeDate = RelativeDate;
window._ = _;

export default RelativeDate;
