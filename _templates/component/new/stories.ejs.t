---
to: src/<%= h.getTypePath(locals.type) %>/<%=name%>/<%=name%>.stories.js
---
import React from 'react';
import <%=name%> from './<%=name%>'

export default { title: '<%= h.getTypePath(locals.type) %>/<%=name%>' }
export const Standard = () => <<%=name%> />