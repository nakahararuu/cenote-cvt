import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CenoteCvt from '../lib/cenote-cvt-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CenoteCvt.CenoteCvtStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
