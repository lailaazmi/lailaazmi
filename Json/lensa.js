var obj = JSON.parse($response.body); 
 obj['is_grace_period'] = false;
 obj['is_valid'] = true;
 obj['is_in_billing_retry_period'] = false;
 obj['is_introductory_used'] = true;
 obj['subscription_valid'] = true;
 obj['auth_type'] = "apple";
 obj['subscription_type'] = "annual";
 obj['platform'] = "ios";
 obj['product_id'] = "premium.discount.annual";
 obj['auto_renew_enabled'] = true;
 obj['expiration_date'] = 32356792106;
 obj['expiration_date'] = 2995-05-7T04:31:45Z;
 obj['expiration_date'] = ['32356792106'];
 obj['expiration_date'] = ['2995-05-7T04:31:45Z'];
 obj['is_trial'] = false;
 obj['status'] = "ok";
 obj['processing_count'] = 0;
$done({body: JSON.stringify(obj)});
