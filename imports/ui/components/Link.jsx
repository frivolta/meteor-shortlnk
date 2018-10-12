import React from 'react';
import LinkList from './LinkList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinkListFilter from './LinkListFilter';

const LinkComponent = () => {
        return (
            <div>
                <PrivateHeader title="Links" />
                <LinkListFilter/>
                <LinkList />
                <AddLink />
            </div>
        )
}
export default LinkComponent