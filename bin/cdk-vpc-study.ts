#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkVpcStudyStack } from '../lib/cdk-vpc-study-stack';

const app = new cdk.App();
new CdkVpcStudyStack(app, 'CdkVpcStudyStack', {
  env: { account: process.env.ACCOUNT_ID, region: process.env.REGION },
});
