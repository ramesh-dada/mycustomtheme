import { extend, override } from 'flarum/common/extend';
import TagsPage from 'flarum/tags/components/TagsPage';
import AsiremTagsPage from './components/TagsPage';
import { truncate } from 'flarum/utils/string';

app.initializers.add('custom-tagspage', () => {
  override(TagsPage.prototype, 'view', AsiremTagsPage.prototype.view);
});
