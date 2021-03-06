import { Box } from '@rocket.chat/fuselage';
import React from 'react';

import { useTranslation } from '../../../../client/contexts/TranslationContext';
import { Page } from '../../../../client/components/basic/Page';

function NotAuthorizedPage() {
	const t = useTranslation();

	return <Page>
		<Page.Content>
			<Box is='p' textColor='default' textStyle='p1'>{t('You_are_not_authorized_to_view_this_page')}</Box>
		</Page.Content>
	</Page>;
}

export default NotAuthorizedPage;
