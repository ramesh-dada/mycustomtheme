import { override } from 'flarum/common/extend';
import TagsPage from 'flarum/tags/components/TagsPage';
import AsiremTagsPage from './components/TagsPage';

app.initializers.add('afrux-asirem', () => {
 override(TagsPage.prototype, 'view', AsiremTagsPage.prototype.view);
});
