import React from "react";

import Icon from "metabase/components/Icon";
import Link from "metabase/components/Link";

import { browseDatabase, browseSchema } from "metabase/lib/urls";

import cx from "classnames";

const QuestionDataSource = ({ question, subHead }) => {
  const parts = [];

  const database = question.query().database();
  if (database) {
    parts.push({
      icon: "database",
      name: database.displayName(),
      href: browseDatabase(database),
    });
  }

  const table = question.query().table();
  if (table && table.hasSchema()) {
    parts.push({
      icon: "folder",
      name: table.schema,
      href: browseSchema(table),
    });
  }
  if (table) {
    parts.push({
      icon: "table2",
      name: table.displayName(),
    });
  }

  return subHead ? (
    <SubHeadBreadcrumbs parts={parts} />
  ) : (
    <HeadBreadcrumbs parts={parts} />
  );
};

export default QuestionDataSource;

const SubHeadBreadcrumbs = ({ parts }) => (
  <span className="flex align-center text-medium text-bold">
    {parts.map(({ name, icon, href }, index) => (
      <MaybeLink key={index} to={href} className="flex align-center mr2">
        {icon && <Icon name={icon} className="mr1" />}
        {name}
      </MaybeLink>
    ))}
  </span>
);

const HeadBreadcrumbs = ({ parts }) => (
  <span className="flex align-center mr2">
    {parts.map(({ name, icon, href }, index) => [
      <MaybeLink
        key={index}
        to={href}
        className={cx("flex align-center", href ? "text-medium" : "text-dark")}
      >
        {name}
      </MaybeLink>,
      index < parts.length - 1 ? (
        <span key={index + "-divider"} className="mx1 text-light text-small">
          •
        </span>
      ) : null,
    ])}
  </span>
);

const MaybeLink = ({ to, ...props }) =>
  to ? <Link to={to} {...props} /> : <span {...props} />;